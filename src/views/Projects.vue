<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <!-- <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header"></div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit maxime quia neque mollitia temporibus suscipit totam. Officia, ipsa.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>-->

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia ipsa necessitatibus a eum soluta sint nostrum magnam repellendus doloribus fugit quos voluptas reiciendis vero dolores qui officia, incidunt consequuntur."
        },
        {
          title: "Code up the homepage",
          person: "Chung Lee",
          due: "1st Jan 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia ipsa necessitatibus a eum soluta sint nostrum magnam repellendus doloribus fugit quos voluptas reiciendis vero dolores qui officia, incidunt consequuntur."
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "1st August 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia ipsa necessitatibus a eum soluta sint nostrum magnam repellendus doloribus fugit quos voluptas reiciendis vero dolores qui officia, incidunt consequuntur."
        },
        {
          title: "Create a community",
          person: "Gouken",
          due: "1st Feb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia ipsa necessitatibus a eum soluta sint nostrum magnam repellendus doloribus fugit quos voluptas reiciendis vero dolores qui officia, incidunt consequuntur."
        },
        {
          title: "Design a new website 2",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia ipsa necessitatibus a eum soluta sint nostrum magnam repellendus doloribus fugit quos voluptas reiciendis vero dolores qui officia, incidunt consequuntur."
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "The Net Ninja";
      });
    }
  }
};
</script>
