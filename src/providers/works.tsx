import { createContext, useContext, useReducer } from 'react';

interface WorksContextState {
  isWorksModalOpen: boolean;
}

interface WorksContextActions {
  openWorksModal: () => void;
  closeWorksModal: () => void;
}

interface WorksContextType {
  state: WorksContextState;
  actions: WorksContextActions;
}

const WorksContext = createContext<WorksContextType | undefined>(undefined);

const initialState = { isWorksModalOpen: false };

const worksModalReducer = (
  state: WorksContextState = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'OPEN_WORKS_MODAL':
      return { ...state, isWorksModalOpen: true };

    case 'CLOSE_WORKS_MODAL':
      return { ...state, isWorksModalOpen: false };

    default:
      return state;
  }
};

const WorksModalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(worksModalReducer, initialState);

  const openWorksModal = () => {
    dispatch({
      type: 'OPEN_WORKS_MODAL',
    });
  };

  const closeWorksModal = () => {
    dispatch({
      type: 'CLOSE_WORKS_MODAL',
    });
  };

  const value = {
    state,
    actions: {
      openWorksModal,
      closeWorksModal,
    },
  };

  return (
    <WorksContext.Provider value={value}>{children}</WorksContext.Provider>
  );
};

const useWorksModal = () => {
  const context = useContext(WorksContext);

  if (context === undefined) {
    throw new Error('useWorksModal must be used within provider');
  }

  return context;
};

export { useWorksModal, WorksModalProvider };
