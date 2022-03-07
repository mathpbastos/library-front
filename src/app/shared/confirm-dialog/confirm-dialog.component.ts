import { Component, Input, OnInit } from '@angular/core';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  //ICONS
  faDelete = faTrashCan;
  faClose = faXmark;

  @Input() title!: string;
  @Input() message!: string;
  @Input() btnConfirmText!: string;
  @Input() btnCancelText!: string;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  confirm(){
    this.activeModal.close(true);
  }

  dispose(){
    this.activeModal.dismiss();
  }

}
