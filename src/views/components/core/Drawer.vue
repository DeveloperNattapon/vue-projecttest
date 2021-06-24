<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <!-- <v-list-item-avatar class="align-self-center" color="white" contain>
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="30"
          />
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title class="display-1" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />
    <!-- <v-list expand nav>   
      <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>
    </v-list> -->
    <v-list expand nav>
      <template v-for="item in computedItems">
        <v-list-group
          :group="'attractions'"
          :key="item.title"
          v-if="item.items !== undefined"
          v-model="item.active"
          no-action
          link
        >
          <template v-slot:activator>
            <v-list-item-avatar left>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            router
            :to="subItem.to"
          >
            <v-list-item-avatar left>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.title" link router :to="item.to">
          <v-list-item-avatar left>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <!-- <template v-slot:append>
      <v-list>
        <v-list-item
          v-for="(item, index) in logoutIteme"
          :key="index"
          @click="clickLogout(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template> -->
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data: () => ({
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        to: "/",
      },
      {
        title: "Settings",
        icon: "mdi-cog-box",
        items: [
          {
            title: "Menu",
            icon: "mdi-currency-eth",
            to: "/mainMenu",
          },
          {
            title: "Register",
            icon: "mdi-account-details",
            to: "/register",
          },
        ],
      },
    ],
    currentSelection: "",
    userlogin: localStorage.getItem("userLogin"),
  }),

  computed: {
    ...mapState("state/", ["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.state.drawer;
      },
      set(val) {
        this.$store.commit("state/SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: JSON.parse(this.userlogin).realName
          ? null
          : JSON.parse(this.userlogin).userName,
      };
    },
  },

  methods: {
    ...mapMutations({
      getAlluser: "Login/loginSuccess",
    }),
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
  },
  mounted() {
    console.log("mountrd", this.computedItems);
  },
  created() {
    // this.currentSelection = this.items[0].text;
    // // retain the current route from this.$route.name or path and set it to current variable
    // var current = ""; // set from this.$route
    // // var current = 'Print'; // for testing comment above line and uncomment this line
    // if (current) {
    //   var self = this;
    //   this.items.forEach((item, i) => {
    //     if (item.text == current) {
    //       this.currentSelection = current;
    //     }
    //     if (item.children && item.children.length) {
    //       if (item.children.map((x) => x.text).includes(current)) {
    //         self.items[i].model = true;
    //         this.currentSelection = current;
    //       }
    //     }
    //   });
    // }
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
