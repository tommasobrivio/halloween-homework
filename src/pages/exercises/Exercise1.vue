<script lang="ts" setup>
    import type { MaybePromise } from "@byloth/core";
    import { useVuert } from "@byloth/vuert";

    import { ref, watch } from "vue";

    import SelectBox from "@/components/forms/SelectBox.vue";
    import TextBox from "@/components/forms/TextBox.vue";
    import AppButton from "@/components/ui/AppButton.vue";

    import { computeOperation } from "@/exercises/exercise1";
    import type { Operation } from "@/exercises/exercise1";

    const $vuert = useVuert();

    const number1Text = ref("Primo numero");
    const number2Text = ref("Secondo numero");
    const resultText = ref("Risultato");

    const number1 = ref("");
    const number2 = ref("");

    const operator = ref<Operation | "">("");

    const result1 = ref("");

    watch(operator, () =>
    {
        result1.value = "";

        switch (operator.value)
        {
            case "+":
                number1Text.value = "Addendo";
                number2Text.value = "Addendo";
                resultText.value = "Somma";

                break;

            case "-":
                number1Text.value = "Minuendo";
                number2Text.value = "Sottraendo";
                resultText.value = "Differenza";

                break;

            case "*":
                number1Text.value = "Moltiplicando";
                number2Text.value = "Moltiplicatore";
                resultText.value = "Prodotto";

                break;

            case "/":
                number1Text.value = "Dividendo";
                number2Text.value = "Divisore";
                resultText.value = "Quoziente";

                break;

            default:
                number1Text.value = "Primo numero";
                number2Text.value = "Secondo numero";
                resultText.value = "Risultato";

                break;
        }
    });

    const onSubmit1 = (): MaybePromise<void> =>
    {
        if (!operator.value || !number1.value || !number2.value)
        {
            return $vuert.emit({
                icon: "circle-exclamation",
                title: "Informazioni mancanti",
                message: "Per favore, compila tutti i campi prima di effettuare il calcolo.",
                type: "warning",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        const num1 = Number(number1.value);
        const num2 = Number(number2.value);

        if (Number.isNaN(num1) || Number.isNaN(num2))
        {
            return $vuert.emit({
                icon: "circle-xmark",
                title: "Numeri non validi",
                message: "Uno o entrambi i valori inseriti non sembrano essere numeri validi.",
                type: "error",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        const res = computeOperation(num1, num2, operator.value);

        if (Number.isNaN(res) || !Number.isFinite(res))
        {
            return $vuert.emit({
                icon: "circle-xmark",
                title: "Risultato non valido",
                message: "Il risultato dell'operazione non sembra essere un numero valido.",
                type: "error",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        result1.value = res.toString();
    };

    const number3 = ref("");
    const number4 = ref("");

    const result2 = ref("");
    const result3 = ref("");

    const onSubmit2 = (): MaybePromise<void> =>
    {
        if (!number3.value || !number4.value)
        {
            return $vuert.emit({
                icon: "circle-exclamation",
                title: "Informazioni mancanti",
                message: "Per favore, compila tutti i campi prima di effettuare il calcolo.",
                type: "warning",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        const num1 = Number(number3.value);
        const num2 = Number(number4.value);

        if (Number.isNaN(num1) || Number.isNaN(num2))
        {
            return $vuert.emit({
                icon: "circle-xmark",
                title: "Numeri non validi",
                message: "Uno o entrambi i valori inseriti non sembrano essere numeri validi.",
                type: "error",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        const res1 = computeOperation(num1, num2, "/");
        const res2 = computeOperation(num1, num2, "%");

        if (Number.isNaN(res1) || !Number.isFinite(res1))
        {
            return $vuert.emit({
                icon: "circle-xmark",
                title: "Risultato non valido",
                message: "Il risultato dell'operazione di divisione non sembra essere un numero valido.",
                type: "error",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        if (Number.isNaN(res2) || !Number.isFinite(res2))
        {
            return $vuert.emit({
                icon: "circle-xmark",
                title: "Risultato non valido",
                message: "Il risultato dell'operazione di modulo non sembra essere un numero valido.",
                type: "error",
                dismissible: true,
                timeout: 5000,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });
        }

        result2.value = Math.floor(res1).toString();
        result3.value = res2.toString();
    };
</script>

<template>
    <div id="exercise-1" class="container page">
        <h1>[Esercizio 1] Calcolatrice</h1>
        <hr />
        <h2 class="my-4">
            Parte 1
        </h2>
        <form class="inset-form" @submit.prevent="onSubmit1">
            <p>
                Una semplice <strong>calcolatrice</strong>.<br />
                Può eseguire le 4 operazioni principali tra due numeri:
            </p>
            <ul>
                <li><strong>Addizione</strong></li>
                <li><strong>Sottrazione</strong></li>
                <li><strong>Moltiplicazione</strong></li>
                <li><strong>Divisione</strong></li>
            </ul>
            <p>
                Implementa e scrivi la funzione in grado di eseguire queste operazioni tra i numeri.
            </p>
            <div class="input-group">
                <TextBox id="number-1"
                         v-model="number1"
                         :label="number1Text"
                         required
                         type="number" />
                <SelectBox id="operator"
                           v-model="operator"
                           label="Operazione"
                           required>
                    <option disabled
                            selected
                            value="">
                        Seleziona...
                    </option>
                    <option disabled value="">
                        -------------------
                    </option>
                    <option value="+">
                        ➕ Addizione
                    </option>
                    <option value="-">
                        ➖ Sottrazione
                    </option>
                    <option value="*">
                        ✖️ Moltiplicazione
                    </option>
                    <option value="/">
                        ➗ Divisione
                    </option>
                </SelectBox>
                <TextBox id="number-2"
                         v-model="number2"
                         :label="number2Text"
                         required
                         type="number" />
                <AppButton theme="light" type="submit">
                    🟰
                </AppButton>
                <TextBox id="result"
                         v-model="result1"
                         :label="resultText"
                         readonly
                         type="number" />
            </div>
        </form>
        <hr />
        <h2 class="my-4">
            Parte 2
        </h2>
        <form class="inset-form" @submit.prevent="onSubmit2">
            <p>
                Questa versione della calcolatrice, utilizza
                la <b><u>STESSA</u></b> funzione di calcolo della versione precedente.<br />
                Verificando di non rompere quanto già fatto e testato,
                aggiungi e gestisci il calcolo del <strong>resto</strong>.
            </p>
            <div class="input-group">
                <TextBox id="number-1"
                         v-model="number3"
                         label="Dividendo"
                         required
                         type="number" />
                <span class="input-group-text">➗</span>
                <TextBox id="number-2"
                         v-model="number4"
                         label="Divisore"
                         required
                         type="number" />
                <AppButton theme="light" type="submit">
                    🟰
                </AppButton>
                <TextBox id="result"
                         v-model="result2"
                         label="Quoziente"
                         readonly
                         type="number" />
                <TextBox id="result"
                         v-model="result3"
                         label="Resto"
                         readonly
                         type="number" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    #exercise-1
    {
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;

        .inset-form
        {
            background-color: variables.$inset-gray;
            border-right: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 0.75em;
            box-shadow: inset 0px 0px 0.5em 0px rgba(0, 0, 0, 0.5);
            padding: 1em;
        }

        .input-group-text
        {
            background-color: transparent;
            border-color: #BFBFBF;
        }
    }
</style>
