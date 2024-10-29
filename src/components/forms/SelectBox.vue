<script lang="ts" setup>
    import { computed, useAttrs } from "vue";

    const $attrs = useAttrs();

    const props = defineProps({
        id: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        },

        modelValue: {
            default: "",
            type: String
        },

        small: {
            default: false,
            type: Boolean
        },
        large: {
            default: false,
            type: Boolean
        },
        plaintext: {
            default: false,
            type: Boolean
        },

        valid: {
            default: false,
            type: Boolean
        },
        validMessage: {
            default: "Looks good!",
            type: String
        },
        invalid: {
            default: false,
            type: Boolean
        },
        invalidMessage: {
            default: "Can't be blank!",
            type: String
        }
    });

    const emit = defineEmits(["update:modelValue"]);

    const properties = computed(() =>
    {
        const { "class": _c, "style": _s, ...rest } = $attrs;

        return rest;
    });

    const validationClasses = computed((): Record<string, boolean> => ({
        "is-valid": props.valid,
        "is-invalid": props.invalid
    }));
    const inputClasses = computed((): Record<string, boolean> => ({
        "form-select-sm": props.small,
        "form-select-lg": props.large,

        ...validationClasses.value
    }));

    const onInput = (evt: Event) =>
    {
        const input = evt.target as HTMLInputElement;

        emit("update:modelValue", input.value);
    };
</script>

<template>
    <div class="select-box">
        <div class="form-floating" :class="validationClasses">
            <select :id="id"
                    class="form-select"
                    :class="inputClasses"
                    :placeholder="label"
                    :value="modelValue"
                    v-bind="properties"
                    @input="onInput">
                <slot></slot>
            </select>
            <label :for="id">
                {{ label }}
            </label>
        </div>
        <div v-if="valid && validMessage" class="valid-feedback">
            {{ validMessage }}
        </div>
        <div v-if="invalid && invalidMessage" class="invalid-feedback">
            {{ invalidMessage }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .select-box
    {
        & > .form-floating
        {
            text-align: left;

            & > label
            {
                color: var(--bs-body-color);
            }

            & > .form-select
            {
                position: relative;

                &:focus
                {
                    z-index: 4;
                }
            }

            .input-group > &
            {
                & > label
                {
                    z-index: 4;
                }

                & > .form-select
                {
                    position: relative;
                    z-index: 3;

                    &:focus
                    {
                        z-index: 4;
                    }
                }
            }
        }

        .input-group > &:not(:first-child) > .form-floating > .form-select
        {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        .input-group > &:not(:last-child) > .form-floating > .form-select
        {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
</style>
