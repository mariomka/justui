import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('renders the welcome heading', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1').text()).toContain('Hello World')
  })

  it('renders the welcome paragraph', () => {
    const wrapper = mount(App)
    expect(wrapper.find('p').text()).toBe('Welcome to your Electron application.')
  })
})
