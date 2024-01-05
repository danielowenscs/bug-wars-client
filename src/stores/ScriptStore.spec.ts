import { test,describe,beforeEach} from 'vitest'
import { useScriptStore } from './ScriptStore'
import { createPinia, setActivePinia } from 'pinia';

describe('ScriptStore', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });



test('should set all scripts', ({ expect }) => {
 const store = useScriptStore()
 const newScripts = [
   {
     scriptId: 3,
     name: 'Script Three',
     body: 'Testing a Third Script',
   },
   {
     scriptId: 4,
     name: 'Script Four',
     body: 'Testing a Fourth Script',
   },
 ]

 store.setAllScripts(newScripts)

 expect(store.scripts).toEqual(newScripts)
})
test('should set a single script', ({ expect }) => {
  const store = useScriptStore();
  const newScript = {
      scriptId: 5,
      name: 'Script Five',
      body: 'Testing a Fifth Script',
  };

  store.setScript(newScript);

  expect(store.script).toEqual(newScript);
});
})