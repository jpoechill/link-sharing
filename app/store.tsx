import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
  email: string
  links: Link[]
}

interface Platforms {
  name: string;
  icon: string;
  link: string;
  placeholder: string;
}

type Link = {
  name: string
  url?: string
}

type StateProperties = {
  options: Platforms[];
  selected: number;
  link: Link[];
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
  updateEmail: (email: State['email']) => void
  updateUserLinks: (updatedLink: string) => void
}

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  links: [{ name: 'cat' }],
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  updateEmail: (email) => set(() => ({ email: email })),
  updateUserLinks: (updatedLink) => set((state) => ({
    links:
      state.links.map((item, index) => {
        if (index === 0) {
          return { ...item, name: updatedLink };
        } else {
          return item;
        }
      })
  }))
}))

export default usePersonStore;