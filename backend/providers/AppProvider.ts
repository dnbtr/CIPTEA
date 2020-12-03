import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
	public static needsApplication = true

  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    console.log('boot event (AppProvider.ts)')
  }
  
  public async ready () {
    console.log('ready event (AppProvider.ts)')
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
