import * as $$ from 'mdui';

export class FormState {

  isReadonly: boolean;
  editBtn: boolean;
  saveBtn: boolean;

  edit(): void {
    this.isReadonly = false;
    this.editBtn = true;
    this.saveBtn = false;
  }

  save(): void {
    this.isReadonly = true;
    this.editBtn = false;
    this.saveBtn = true;
    $$.snackbar({
      message: '保存成功！'
    });
  }

}
