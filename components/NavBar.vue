<template>
    <nav class="block mt-2">
        <ul class="flex w-full bg-indigo-100 rounded">
            <NavLink to="/#home" title="Home" />
            <NavLink to="/#skills" title="Skills" />
            <NavLink to="/#projects" title="Projects" />
            <NavLink to="/#contact" title="Contact" />
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
    
}
</script>