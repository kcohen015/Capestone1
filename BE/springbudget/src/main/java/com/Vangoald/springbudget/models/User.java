package com.Vangoald.springbudget.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table(name = "users",
       uniqueConstraints = {
           @UniqueConstraint(columnNames = "username"),
           @UniqueConstraint(columnNames = "email")
       })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  
  @Size(max = 20)
  private String firstName;

 
  @Size(max = 20)
  private String lastName;

  
  private double monlthyIncome;

  
  private double expenses;

  
  private String category;

 
  private String notes;

  
  private double datetime;






  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", 
             joinColumns = @JoinColumn(name = "user_id"),
             inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  public User() {
  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  public User(String username, String email, String password, String firstName, String lastName, double monlthyIncome, double expenses, String category, String notes, double datetime) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monlthyIncome = monlthyIncome;
    this.expenses = expenses;
    this.category = category;
    this.notes = notes;
    this.datetime = datetime;
  }

  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public Set<Role> getRoles() {
    return roles;
  }
  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }
  public String getFirstName() {
      return firstName;
  }
  public void setFirstName(String firstName) {
      this.firstName = firstName;
  }

  public String getLastName() {
      return lastName;
  }
  public void setLastName(String lastName) {
      this.lastName = lastName;
  }
  public double getMonlthyIncome() {
      return monlthyIncome;
  }
  public void setMonlthyIncome(double monlthyIncome) {
      this.monlthyIncome = monlthyIncome;
  }
  public double getExpenses() {
      return expenses;
  }
  public void setExpenses(double expenses) {
      this.expenses = expenses;
  }
  public String getCategory() {
      return category;
  }
  public void setCategory(String category) {
      this.category = category;
  }
  public String getNotes() {
      return notes;
  }
  public void setNotes(String notes) {
      this.notes = notes;
  }
  public double getDatetime() {
      return datetime;
  }
  public void setDatetime(double datetime) {
      this.datetime = datetime;
  }

}
