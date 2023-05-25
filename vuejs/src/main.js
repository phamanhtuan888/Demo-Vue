import { createApp } from 'vue'
import App from './App.vue'
import BaInput from './components/base/BaInput.vue'
import BaCombobox from './components/base/BaCombobox/BaCombobox.vue'
import BaDatePicker from './components/base/BaDatePicker.vue'
import BaInputInfoEtn from './components/base/BaInputInfoEtn.vue'
import BaSearchEmployee from './components/base/BaSearchEmployee/BaSearchEmployee.vue'
import BaTable from './components/base/BaTable/BaTable'

const app = createApp(App);
app.component("BaCombobox",BaCombobox);
app.component("BaInput",BaInput);
app.component("BaDatePicker",BaDatePicker)
app.component("BaInputInfoEtn",BaInputInfoEtn)
app.component("BaSearchEmployee",BaSearchEmployee)
app.component("BaTable",BaTable)

createApp(App).mount('#app')
