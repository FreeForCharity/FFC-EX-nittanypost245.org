import { assetPath } from '../../src/lib/assetPath'

describe('assetPath utility', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  it('should return path without basePath when NEXT_PUBLIC_BASE_PATH is not set', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH
    expect(assetPath('/logo.png')).toBe('/logo.png')
  })

  it('should return path without basePath when NEXT_PUBLIC_BASE_PATH is empty', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = ''
    expect(assetPath('/logo.png')).toBe('/logo.png')
  })

  it("should treat '/' basePath as empty", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/'
    expect(assetPath('/logo.png')).toBe('/logo.png')
  })

  it('should prepend basePath when NEXT_PUBLIC_BASE_PATH is set', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/some-base-path'
    expect(assetPath('/logo.png')).toBe('/some-base-path/logo.png')
  })

  it('should trim trailing slashes from basePath', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/some-base-path/'
    expect(assetPath('/logo.png')).toBe('/some-base-path/logo.png')
  })

  it('should normalize asset paths missing a leading slash', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/some-base-path'
    expect(assetPath('logo.png')).toBe('/some-base-path/logo.png')
  })

  it('should handle paths with subdirectories', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/some-base-path'
    expect(assetPath('/images/hero.jpg')).toBe('/some-base-path/images/hero.jpg')
  })

  it('should handle root path', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/some-base-path'
    expect(assetPath('/')).toBe('/some-base-path/')
  })
})
