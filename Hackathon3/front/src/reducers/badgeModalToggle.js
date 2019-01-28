export const badgeModalToggle = (state = false, action) => {
  switch (action.type) {
    case 'BADGE_MODAL_ON': return true;
    case 'BADGE_MODAL_OFF': return false;
    default: return state;
  }
};

