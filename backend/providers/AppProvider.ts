import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
	public static needsApplication = true

  constructor (protected app: ApplicationContract) {
  }

  public register () {
    console.log('register event (providers/AppProvider.ts)')
  }

  public async boot () {
    console.log('boot event (providers/AppProvider.ts)')
  }
  
  public async ready () {
    console.log('ready event (providers/AppProvider.ts)')
  }

  public async shutdown () {
    console.log('shutdown event (providers/AppProvider.ts)')
  }
}
