package com.example.paintingexhibition.service;

import com.example.paintingexhibition.model.Painting;
import com.example.paintingexhibition.repository.PaintingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaintingService {


    @Autowired
    private PaintingRepository paintingRepository;

    public Painting createPainting(Painting painting) {
       return paintingRepository.save(painting);
    }




}
