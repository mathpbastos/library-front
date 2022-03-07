import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private modalService: NgbModal) { }

  confirm(
    title: string,
    message: string,
    btnConfirmText: string,
    btnCancelText: string,
  ):Promise<boolean>{

    const modalRef = this.modalService.open(ConfirmDialogComponent);

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnConfirmText = btnConfirmText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;

  }

}
