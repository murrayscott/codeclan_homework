package com.codeclan.FilesFolders.repositories;

import com.codeclan.FilesFolders.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
