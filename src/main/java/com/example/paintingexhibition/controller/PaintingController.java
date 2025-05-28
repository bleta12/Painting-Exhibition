package com.example.paintingexhibition.controller;
import com.example.paintingexhibition.model.Painting;
import com.example.paintingexhibition.service.PaintingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/painting")
public class PaintingController {

    private final PaintingService paintingService;

    public PaintingController(PaintingService paintingService) {
        this.paintingService = paintingService;
    }

    @PostMapping
    public ResponseEntity<Painting> createPainting(@RequestBody Painting painting) {
        Painting savedPainting = paintingService.createPainting(painting);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPainting);
    }

    @GetMapping("/all")
    public List<Painting> getAll(){
        return paintingService.getAll();
    }
}
