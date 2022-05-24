import { createContext, useContext, useReducer } from 'react';

interface ContactContextState {
  isContactFormOpen: boolean;
}

interface ContactContextActions {
  openContactForm: () => void;
  closeContactForm: () => void;
}

interface ContactContextType {
  state: ContactContextState;
  actions: ContactContextActions;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

const initialState = { isContactFormOpen: true };

const contactFormReducer = (state: ContactContextState, action: any) => {
  switch (action.type) {
    case 'OPEN_CONTACT_FORM':
      return { ...state, isContactFormOpen: true };

    case 'CLOSE_CONTACT_FORM':
      return { ...state, isContactFormOpen: false };

    default:
      return state;
  }
};

const ContactFormProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);

  const openContactForm = () => {
    dispatch({
      type: 'OPEN_CONTACT_FORM',
    });
  };

  const closeContactForm = () => {
    dispatch({
      type: 'CLOSE_CONTACT_FORM',
    });
  };
  const value = {
    state,
    actions: {
      openContactForm,
      closeContactForm,
    },
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};

function useContactForm() {
  const context = useContext(ContactContext);

  if (context === undefined) {
    throw new Error('useContactForm must be used within ContactFormProvider');
  }

  return context;
}

export { ContactFormProvider, useContactForm };
