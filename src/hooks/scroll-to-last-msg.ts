const lastMessageScroll = (selector: string) => {
  var e = document.querySelector(`.${selector}`);
  if (!e) return ;

  e.scrollIntoView({
    behavior: 'smooth' || 'auto',
    block: 'end',
  });
}

export default lastMessageScroll;