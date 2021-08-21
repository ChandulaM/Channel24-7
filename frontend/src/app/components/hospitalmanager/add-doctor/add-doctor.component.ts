import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DoctorDTO, DoctorModel } from 'src/app/models/Doctor';
import { finalize } from 'rxjs/operators'
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

   nameText: string = '';
   emailText: string = '';
   numberText: string = '';
   imageText: string = 'https://www.w3schools.com/howto/img_avatar.png';
   previewImage: any = 'https://www.w3schools.com/howto/img_avatar.png';
   specializationText: string = '100';
   hospitalText: string = '102';
   descriptionText: string= '';
   imageFile :any = null;   

   isImageUploaded: boolean = true;
   isImageError: boolean = false;

  specializations = [
    {
      id: '100',
      name: 'Kidney'
    },
    {
      id: '100',
      name: 'Hart'
    },
    {
      id: '100',
      name: 'Skin'
    }
  ]

  constructor(private storage: AngularFireStorage, private service: DoctorServiceService) { }

  ngOnInit(): void {
  }

  onChangeImage(files: any) {
    if(files.length == 0) {
      return;
    }
    var reader = new FileReader()

    this.imageFile = files.target.files[0];

    console.log(this.imageFile)

    reader.readAsDataURL(files.target.files[0])

    var type = this.imageFile.type
    if(type.match(/image\/*/)==null) {
      this.isImageError = true
    }else {
      this.isImageError = false
    }

    reader.onload = (_event) => {
      this.previewImage = reader.result
    }
  }

  
  uploadImage() {
    return new Promise((resolve,reject) => {
      
    var n = Date.now();
    const file = this.imageFile
    const filePath = `doctors/${n}`;
    const fileRef = this.storage.ref(filePath);
    const upload = this.storage.upload(filePath, file)

    upload
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadURL => {
            console.log(downloadURL)
            resolve(downloadURL)
            this.imageText = downloadURL
          });
        })
      )
      .subscribe(url => {
        console.log(url)
      }, err => {
        reject(err)
      })
    })
  }

  async saveDoctor() {


    await this.uploadImage()

    const doctor: DoctorDTO = {
      name:  this.nameText,
      number: this.nameText,
      image: this.imageText,
      specialization_id: Number.parseInt(this.specializationText),
      hospital_id: Number.parseInt(this.hospitalText),
      description: this.descriptionText
    }
    console.log(doctor)

    this.service.saveDoctor(doctor).subscribe()

  }


}


