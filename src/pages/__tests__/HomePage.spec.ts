import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage', () => {
  it('renders "Ni"', () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.text()).toMatch('Ni')
  })
})
