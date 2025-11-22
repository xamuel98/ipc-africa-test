import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import GridFilter from '../../components/GridFilter.vue'

// Mock the store
const mockToggleFilter = vi.fn()
vi.mock('../../stores/grid', () => ({
  useGridStore: () => ({
    availableShapes: ['oval', 'round'],
    availableColors: ['red', 'blue'],
    selectedShapes: ['oval'],
    selectedColors: ['red'],
    toggleFilter: mockToggleFilter
  })
}))

describe('GridFilter', () => {
  it('renders filter groups', () => {
    const wrapper = mount(GridFilter)

    expect(wrapper.text()).toContain('Shapes')
    expect(wrapper.text()).toContain('Colors')
    expect(wrapper.findAll('button').length).toBe(4) // 2 shapes + 2 colors
  })

  it('toggles filter on click', async () => {
    const wrapper = mount(GridFilter)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(mockToggleFilter).toHaveBeenCalledWith('shape', 'oval')
  })
})
