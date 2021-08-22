import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DoctorDTO, DoctorModel } from 'src/app/models/Doctor';
import { finalize } from 'rxjs/operators'
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { SpecializationServiceService } from 'src/app/services/specialization-service.service';
import { Specialization } from 'src/app/models/Specialization';
import { Router } from '@angular/router';

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
   loading: boolean = false;   

   isImageUploaded: boolean = true;
   isImageError: boolean = false;

  specializations: Array<Specialization> = [];

  constructor(private storage: AngularFireStorage, private service: DoctorServiceService, private spelizationService: SpecializationServiceService, private router: Router ) { }

  ngOnInit(): void {

    this.spelizationService.getAllSpecializations().subscribe(res => {
      this.specializations = res.result;
      //console.log(res.result[0].name)
    })

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

    this.loading = true;

    await this.uploadImage()

    if(this.imageText==null) {
      this.imageText = "https://www.w3schools.com/howto/img_avatar.png"
    }

    const doctor: DoctorDTO = {
      name:  this.nameText,
      number: this.nameText,
      image: this.imageText,
      specialization_id: Number.parseInt(this.specializationText),
      hospital_id: Number.parseInt(this.hospitalText),
      description: this.descriptionText
    }
    console.log(doctor)

    this.service.saveDoctor(doctor).subscribe(res => {
      this.loading= false
      this.router.navigate(['/hospitalmanager/doctors']);
    })

  }


}


