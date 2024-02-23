import { Component } from '@angular/core';
import { Users } from '../../Models/Users';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './index-crud.component.html',
  styleUrl: './index-crud.component.css',
})
export class IndexCrudComponent {
  public valorBtn = 'Guardar Usuario';
  public Tittle = 'Agregar Usuario';
  public index: number = -1;
  public filtro: string = '';

  user: Users[] = [
    { 
      id: 1, 
      name: 'pepito', 
      lastName: 'perez', 
      email: 'pepito@gmail.com' 
    },
    {
      id: 2,
      name: 'juanito',
      lastName: 'gonzales',
      email: 'juanito@gmail.com',
    },
    {
      id: 3,
      name: 'joselito',
      lastName: 'jimenez',
      email: 'joselito@gmail.com',
    },
  ];

  userCopia = this.user.slice();
  ngModelUsers: Users = { id: 0, name: '', lastName: '', email: '' };

  openmodal() {
    document.getElementById('modal')!.style.display = 'block';
  }

  closemodal() {
    document.getElementById('modal')!.style.display = 'none';
    this.ngModelUsers = { id: 0, name: '', lastName: '', email: '' };
  }

  addEdit() {
    if (this.ngModelUsers.id == 0) {
      this.user.push({
        id: this.user.length + 1,
        name: this.ngModelUsers.name,
        lastName: this.ngModelUsers.lastName,
        email: this.ngModelUsers.email,
      });
      this.userCopia = this.user;

    } else {
      this.index = this.user.findIndex(
        (Element) => 
          Element.id == this.ngModelUsers.id
      );
      if (this.index != -1) {
        this.user[this.index].name = this.ngModelUsers.name;
        this.user[this.index].lastName = this.ngModelUsers.lastName;
        this.user[this.index].email = this.ngModelUsers.email;
      }
    }
    this.closemodal();
  }

  delete(id: any) {
    this.index = this.user.findIndex((Element) => Element.id == id);
    if (this.index != -1) {
      this.user.splice(this.index, 1);
      this.userCopia = this.user;
    }
  }
  editar(id:any){
    this.openmodal();
    this.index = this.user.findIndex((Element) => Element.id == id);
    if (this.index != -1) {
      this.ngModelUsers.id = this.user[this.index].id;
      this.ngModelUsers.name = this.user[this.index].name;
      this.ngModelUsers.lastName = this.user[this.index].lastName;
      this.ngModelUsers.email = this.user[this.index].email;
    }
    
  }

  filtrar() {
    if (this.filtro) {
      this.userCopia = this.user.filter(
        (element) =>
          element.name.toLowerCase().includes(this.filtro.toLowerCase()) ||
          element.lastName.toLowerCase().includes(this.filtro.toLowerCase()) ||
          element.email.toLowerCase().includes(this.filtro.toLowerCase())
      );
    } else {
      this.userCopia = this.user;
    }
  }
}
