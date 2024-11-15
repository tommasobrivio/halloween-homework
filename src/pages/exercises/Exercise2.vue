<script lang="ts" setup>
    import { Random } from "@byloth/core";

    import { computed, ref } from "vue";

    import AppButton from "@/components/ui/AppButton.vue";
    import FontAwesome from "@/components/ui/FontAwesome.vue";

    import { dealDamage, getLife } from "@/exercises/exercise2";
    import type { Player } from "@/exercises/exercise2";

    import { rollDices } from "@/utils";

    const turn = ref<Player>(Random.Choice(["player1", "player2"]));

    const win1 = ref<boolean | null>(null);
    const classes1 = computed((): Record<string, boolean> => ({
        win: win1.value === true,
        lose: win1.value === false,
        disabled: turn.value !== "player1"
    }));

    const life1 = ref(getLife("player1"));
    const availableAction1 = ref(2);
    const availableSpell1 = ref(1);

    const attackClasses1 = computed((): string[] =>
    {
        if (availableAction1.value <= 0) { return ["disabled"]; }

        return [];
    });
    const secondWindClasses1 = computed((): string[] =>
    {
        if (availableAction1.value <= 0) { return ["disabled"]; }
        if (availableSpell1.value <= 0) { return ["disabled"]; }

        return [];
    });

    const progressClasses1 = computed((): string[] =>
    {
        if (life1.value <= 15)
        {
            return ["bg-danger"];
        }
        if (life1.value <= 50)
        {
            return ["bg-warning"];
        }

        return ["bg-success"];
    });
    const styles1 = computed((): Record<string, string> => ({ width: `${life1.value}%` }));

    const attack1 = () =>
    {
        if (availableAction1.value <= 0) { return; }

        const damage = rollDices(2, 6) + 4; // 2d6 + 4

        dealDamage("player2", damage);

        life1.value = getLife("player1");
        life2.value = getLife("player2");

        checkWin();

        availableAction1.value -= 1;
    };
    const secondWind1 = () =>
    {
        if (availableAction1.value <= 0) { return; }
        if (availableSpell1.value <= 0) { return; }

        const heal = rollDices(1, 10) + 5; // 1d10 + 5

        dealDamage("player1", -heal);

        life1.value = getLife("player1");
        life2.value = getLife("player2");

        checkWin();

        availableAction1.value -= 1;
        availableSpell1.value -= 1;
    };

    const win2 = ref<boolean | null>(null);
    const classes2 = computed((): Record<string, boolean> => ({
        win: win2.value === true,
        lose: win2.value === false,
        disabled: turn.value !== "player2"
    }));

    const life2 = ref(getLife("player2"));
    const availableAction2 = ref(1);
    const availableSpell2 = ref(2);

    const fireBoltClasses2 = computed((): string[] =>
    {
        if (availableAction2.value <= 0) { return ["disabled"]; }

        return [];
    });
    const fireBallClasses2 = computed((): string[] =>
    {
        if (availableAction2.value <= 0) { return ["disabled"]; }
        if (availableSpell2.value <= 0) { return ["disabled"]; }

        return [];
    });
    const progressClasses2 = computed((): string[] =>
    {
        if (life2.value <= 15)
        {
            return ["bg-danger"];
        }
        if (life2.value <= 50)
        {
            return ["bg-warning"];
        }

        return ["bg-success"];
    });
    const styles2 = computed((): Record<string, string> => ({ width: `${life2.value}%` }));

    const fireBolt2 = () =>
    {
        if (availableAction2.value <= 0) { return; }

        const damage = rollDices(2, 10); // 2d10

        dealDamage("player1", damage);

        life1.value = getLife("player1");
        life2.value = getLife("player2");

        checkWin();

        availableAction2.value -= 1;
    };
    const fireBall2 = () =>
    {
        if (availableAction2.value <= 0) { return; }
        if (availableSpell2.value <= 0) { return; }

        const damage = rollDices(8, 6); // 8d6

        dealDamage("player1", damage);

        life1.value = getLife("player1");
        life2.value = getLife("player2");

        checkWin();

        availableAction2.value -= 1;
        availableSpell2.value -= 1;
    };

    const checkWin = (): void =>
    {
        if (life1.value <= 0)
        {
            win1.value = false;
            win2.value = true;
        }
        if (life2.value <= 0)
        {
            win1.value = true;
            win2.value = false;
        }
    };

    const changeTurn = (): void =>
    {
        turn.value = (turn.value === "player1") ? "player2" : "player1";

        life1.value = getLife("player1");
        life2.value = getLife("player2");

        checkWin();

        availableAction1.value = 2;
        availableAction2.value = 1;
    };
</script>

<template>
    <div id="exercise-2" class="container page">
        <h1>[Esercizio 2] Combattimento a turni</h1>
        <p>
            Questo esercizio pone il suo focus sull'uso delle <strong>variabili</strong>.<br />
            Per risolvere questo esercizio, vi servirà utilizzare le variabili
            per tener traccia della vita residua dei due giocatori e qualche calcolo aritmetico.
        </p>
        <hr />
        <h2 class="my-4">
            Parte 1
        </h2>
        <p>
            Rendi funzionante questa semplice interfaccia di gioco.<br />
            Implementa le due funzioni <code>getLife</code> e <code>dealDamage</code> per poter
            calcolare la vita residua dei due giocatori e per poter infliggere i rispettivi danni.
        </p>
        <div class="row">
            <div class="col-6 inset-form player" :class="classes1">
                <div class="row">
                    <div class="col-2">
                        <img src="@/assets/images/githyanki.jpeg" alt="Githyanki" />
                    </div>
                    <div class="player__description col-10">
                        <h2>
                            Ros'a'alac
                            <FontAwesome icon="crown" />
                            <FontAwesome icon="skull" />
                        </h2>
                        <p><i>Githyanki - Guerriero [lvl. 5]</i></p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar"
                         :class="progressClasses1"
                         :style="styles1">
                    </div>
                </div>
                <hr />
                <p>
                    Azioni disponibili: <strong>{{ availableAction1 }}</strong>
                </p>
                <div class="actions row">
                    <div class="col-6">
                        <AppButton class="attack-btn"
                                   :class="attackClasses1"
                                   theme="primary"
                                   @click="attack1">
                            Attacca
                        </AppButton>
                    </div>
                    <div class="col-6">
                        <AppButton class="attack-btn"
                                   :class="secondWindClasses1"
                                   theme="success"
                                   @click="secondWind1">
                            Recupera energia [{{ availableSpell1 }}]
                        </AppButton>
                    </div>
                    <div class="col-12">
                        <AppButton class="attack-btn"
                                   theme="secondary"
                                   @click="changeTurn">
                            Passa il turno
                        </AppButton>
                    </div>
                </div>
            </div>
            <div class="col-6 inset-form player" :class="classes2">
                <div class="row">
                    <div class="col-2">
                        <img src="@/assets/images/tiefling.jpeg" alt="Tiefling" />
                    </div>
                    <div class="player__description col-10">
                        <h2>
                            Navari
                            <FontAwesome icon="crown" />
                            <FontAwesome icon="skull" />
                        </h2>
                        <p><i>Tiefling - Stregone [lvl. 5]</i></p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar"
                         :class="progressClasses2"
                         :style="styles2">
                    </div>
                </div>
                <hr />
                <p>
                    Azioni disponibili: <strong>{{ availableAction2 }}</strong>
                </p>
                <div class="actions row">
                    <div class="col-6">
                        <AppButton class="attack-btn"
                                   :class="fireBoltClasses2"
                                   theme="warning"
                                   @click="fireBolt2">
                            Lancia "Dardo di fuoco"
                        </AppButton>
                    </div>
                    <div class="col-6">
                        <AppButton class="attack-btn"
                                   :class="fireBallClasses2"
                                   theme="danger"
                                   @click="fireBall2">
                            Lancia "Palla di fuoco" [{{ availableSpell2 }}]
                        </AppButton>
                    </div>
                    <div class="col-12">
                        <AppButton class="attack-btn"
                                   theme="secondary"
                                   @click="changeTurn">
                            Passa il turno
                        </AppButton>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <h2 class="my-4">
            Parte 2
        </h2>
        <p>
            Aggiungi un po' di casualità al gioco.<br />
            Gli attacchi eseguiti e le magie lanciate potrebbero fallire. Gestisci questa casistica.
        </p>
        <hr />
        <h2 class="my-4">
            Parte 3
        </h2>
        <p>
            Ora facciamo sul serio! 😏<br />
            Gestisci i colpi critici e i fallimenti critici.
        </p>
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    #exercise-2
    {
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;

        .inset-form
        {
            background-color: variables.$inset-gray;
            border-right: 1px solid rgba(0, 0, 0, 0.5);
            box-shadow: inset 0px 0px 0.5em 0px rgba(0, 0, 0, 0.5);
            padding: 1em;

            &:first-child
            {
                border-bottom-left-radius: 0.75em;
                border-top-left-radius: 0.75em;
            }
            &:last-child
            {
                border-bottom-right-radius: 0.75em;
                border-top-right-radius: 0.75em;
            }
        }

        .player
        {
            img
            {
                border: 1px solid rgba(0, 0, 0, 0.5);
                border-radius: 0.75em;
                width: 100%;
            }

            .actions
            {
                & > .col-6,
                & > .col-12
                {
                    padding: 0.5em 0.75em;

                    & > .btn
                    {
                        width: 100%;

                        &.disabled
                        {
                            cursor: not-allowed;
                            opacity: 0.5;
                            pointer-events: all;
                        }
                    }
                }
            }
            .player__description
            {
                padding: 0.5em 0.75em;

                .fa-crown
                {
                    color: variables.$warning;
                    display: none;
                    margin-left: 0.25em;
                }
                .fa-skull
                {
                    display: none;
                    margin-left: 0.25em;
                }
            }

            .progress
            {
                margin-top: 1rem;
                height: 20px;
            }

            &.win
            {
                background-color: rgba(variables.$success, 0.25);

                .actions
                {
                    & > .col-6,
                    & > .col-12
                    {
                        pointer-events: none;
                    }
                }

                .fa-crown
                {
                    display: inline-block;
                }
            }
            &.lose
            {
                background-color: rgba(variables.$danger, 0.25);

                .actions
                {
                    & > .col-6,
                    & > .col-12
                    {
                        pointer-events: none;
                    }
                }

                .fa-skull
                {
                    display: inline-block;
                }
            }

            &.disabled
            {
                cursor: not-allowed;
                opacity: 0.5;

                .actions
                {
                    & > .col-6,
                    & > .col-12
                    {
                        pointer-events: none;
                    }
                }
            }
        }
    }
</style>
