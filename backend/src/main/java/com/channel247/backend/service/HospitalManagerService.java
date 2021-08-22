package com.channel247.backend.service;

import com.channel247.backend.model.HospitalManager;
import com.channel247.backend.repository.HospitalManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalManagerService {

    @Autowired
    HospitalManagerRepo repo;

    public Page<HospitalManager> getAllHospitalManagers(int pageNo, int pageSize) {

        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<HospitalManager> hospitalManagerPage = repo.findAll(pageable);

        return hospitalManagerPage;

    }

    public HospitalManager saveHospitalManager(HospitalManager hospitalManager) {
        HospitalManager savedHospitalManager = repo.save(hospitalManager);
        return  savedHospitalManager;
    }

    public List<HospitalManager> getPendingHospitalManagers() {
        List<HospitalManager> pendingManagers = repo.findByStatus("pending");
        return pendingManagers;
    }

    public List<HospitalManager> getRegisteredHospitalManagers() {
        List<HospitalManager> registeredManagers = repo.findByStatus("active");
        return registeredManagers;
    }

}
