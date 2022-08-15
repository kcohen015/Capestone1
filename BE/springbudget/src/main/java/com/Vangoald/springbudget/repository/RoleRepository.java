package com.Vangoald.springbudget.repository;

import java.util.Optional;

import com.Vangoald.springbudget.models.ERole;
import com.Vangoald.springbudget.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);

}
