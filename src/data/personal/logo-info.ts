export interface LogoInfo {
  text: string;
  showText: boolean;
  iconOnly: boolean;
  size: {
    icon: 'sm' | 'md' | 'lg' | 'xl';
    text: 'sm' | 'md' | 'lg' | 'xl';
  };
}

export const logoInfo: LogoInfo = {
  text: "Logo",
  showText: true,
  iconOnly: false,
  size: {
    icon: 'lg',
    text: 'xl'
  }
}; 