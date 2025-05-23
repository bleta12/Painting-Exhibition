package com.example.paintingexhibition.controller;
import com.example.paintingexhibition.model.Painting;
import com.example.paintingexhibition.service.PaintingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
