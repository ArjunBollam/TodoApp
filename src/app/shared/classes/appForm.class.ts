import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

export class AppControl {
  label: string;
  type: string;
  name: string;
  validate: boolean;
  control: FormControl;
  options: Array<{ name: string; value: string }> | string[];
  showTogglePassword: boolean;
  helper: string;
  hint: string;
  disabled: boolean;
  emit: boolean;

  constructor(props: {
    label: string;
    type: string;
    name?: string;
    validate?: boolean;
    control: FormControl;
    options?: Array<{ name: string; value: string }> | string[];
    showTogglePassword?: boolean;
    helper?: string;
    hint?: string;
    disabled?: boolean;
    emit?: boolean;
  }) {
    this.label = props.label;
    this.type = props.type;
    this.name = props.name;
    this.validate = props.validate === false ? false : true;
    this.control = props.control;
    this.helper = props.helper || '';
    this.hint = props.hint || '';
    this.disabled = props.disabled;
    this.emit = props.emit || true;
    switch (this.type) {
      case 'select':
        this.options = props.options;
        break;
      case 'password':
        this.showTogglePassword = props.showTogglePassword;
        break;
      default:
    }
  }

  valid() {
    return this.control.valid;
  }
  getValue() {
    return this.control.value;
  }

  get valueChanges() {
    return this.control.valueChanges;
  }

  get statusChanges() {
    return this.control.statusChanges;
  }
}

export class AppForm {

  constructor(public controls: { [key: string]: AppControl }) { }

  getControls() {
    return Object.keys(this.controls)
      .map(controlKey => this.controls[controlKey]);
  }

  valid() {
    let valid = true;
    Object.keys(this.controls).forEach(key => {
      if (this.controls[key].validate && this.controls[key].control.invalid) {
        valid = false;
      }
    });
    return valid;
  }

  onChange(fn) {
    Object.keys(this.controls).forEach(key => {
      this.controls[key].control.valueChanges.subscribe(value => fn(value));
    });
  }

  getValues({ includeDisabled } = { includeDisabled: true }) {
    return Object.keys(this.controls)
      .map(key => this.controls[key])
      .filter(control => includeDisabled ? true : !control.control.disabled)
      .reduce((acc, control) => Object.assign(acc, { [control.name]: control.control.value }), {});
  }

  resetValues(values, options) {
    Object.keys(values).forEach(key => {
      if (this.controls[key]) {
        this.controls[key].control.reset(values[key], options);
      }
    });
  }
}
