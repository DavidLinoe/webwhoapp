import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../../../utils/icons/icons";
import { FormControl } from "@angular/forms";

export interface SidebarNode {
    label: string;
    icon: string | IconDefinition;
    link: string;
    children: SidebarNode[];
  }

  export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'file'
  | 'checkbox'
  | 'radio'
  | 'range'
  | 'color';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: InputType;
  control: FormControl<any>;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  icon?: string;
  helpText?: string;
  errorText?: string;
}
