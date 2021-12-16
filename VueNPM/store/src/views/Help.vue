<template>
    <div class="our-help">
        <h1>Help</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique error atque dolorum est a iusto, sunt temporibus dolores neque, perspiciatis voluptatibus dicta! Aliquam illum impedit corporis odio, voluptatem officiis.</p>
        <WelcomeMessage />
    </div>
    </template>

<script>
    import WelcomeMessage from "@components/WelcomeMessage.vue";

export default {
    name: "about",
    components:{
        WelcomeMessage
    }
};
</script>