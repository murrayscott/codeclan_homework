package com.codeclan.FilesFolders.repositories;

import com.codeclan.FilesFolders.models.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Long> {
}
