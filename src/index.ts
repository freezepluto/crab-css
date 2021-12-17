import { App } from "vue";
import { useConfig } from "./config";
import { defineModule } from "./module";


export const crabCSS = () => {

    const config = useConfig();

    const useModule = defineModule(config.globalModuleKey, {
        setup(register) {
            register.register("mt", "margin-top")
                .register("mr", "margin-left")
                .register("mb", "margin-bottom")
                .register("ml", "margin-left")
                .register("pt", "padding-top")
                .register("pr", "padding-right")
                .register("pb", "padding-bottom")
                .register("pl", "padding-left")
                .register("w", "width")
                .register("h", "height")
        }
    });

    return {
        install(app: App) {
            app.config.globalProperties.Style = useModule();
        }
    }

}

export const good = 1;
