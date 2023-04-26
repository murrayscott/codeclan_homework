package com.codeclan.FilesFolders.repositories;

import com.codeclan.FilesFolders.models.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Long> {
}
