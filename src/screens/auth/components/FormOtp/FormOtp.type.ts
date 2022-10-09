export interface FormOtpProps {
  isPhone: boolean;
  value: string;
  description: string;
  showTextLogin?: boolean;
  onSubmit: (otp: string) => void;
  textBtn: string;
}
