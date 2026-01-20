import { create } from 'zustand'

const useIphoneStore = create((set) => ({
  // 'pro' for iPhone 17 Pro, 'max' for iPhone 17 Pro Max
  model: 'pro',
  setModel: (model) => set({ model }),

  // Color options
  color: 'natural',
  setColor: (color) => set({ color }),

  reset: () => set({ model: 'pro', color: 'natural' }),
}))

export default useIphoneStore
