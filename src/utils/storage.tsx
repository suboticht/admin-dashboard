export const getStoredMode = (): 'light' | 'dark' => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode === 'dark' ? 'dark' : 'light';
};
  
export const setStoredMode = (mode: 'light' | 'dark'): void => {
    localStorage.setItem('themeMode', mode);
};
  