export const formatCurrency = (price: number, currency?: string): string => {
  const giaTri = Math.abs(price);
  const ty = Math.floor(giaTri / 1000000000);
  let sodu = giaTri - ty * 1000000000;
  const trieu = Math.floor(sodu / 1000000);
  sodu = sodu - trieu * 1000000;
  const nghin = Math.floor(sodu / 1000);
  sodu = sodu - nghin * 1000;
  return `${ty ? ty + ' tỷ ' : ''}${trieu ? trieu + ' triệu ' : ''}${nghin ? nghin + ' nghìn' : ''
    } ${sodu || ''} ${currency || 'vnđ'}`;
}