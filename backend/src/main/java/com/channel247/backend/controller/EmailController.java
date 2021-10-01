package com.channel247.backend.controller;

import com.channel247.backend.model.Email;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Controller
@RequestMapping("/email/")
public class EmailController {
    @PostMapping("/send")
    public void sendEmail(@RequestBody Email email) throws URISyntaxException {
        final String baseUrl = "http://localhost:5001/api/messaging/email/sendemail";
        URI uri = new URI(baseUrl);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> result = restTemplate.postForEntity(uri, email, String.class);
    }
}
