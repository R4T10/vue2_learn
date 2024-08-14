<template>
  <div style="margin-left: 20px; margin-right: 20px">
    <div class="text-container" style="margin-left: 20%">
      <p class="montserrat-regular" style="font-size: 40px; margin-top: 20px">
        What's my name
      </p>
      <p class="montserrat-regular" style="font-size: 150px">Krit Tipnuan</p>
    </div>
    <div class="text-center">
      <div class="content">
        <img
          style="
            width: 500px;
            height: 700px;
            object-fit: cover;
            border-radius: 10%;
          "
          src="../assets/profile.jpg"
        />
        <div class="social-icons">
          <img
            class="icon"
            style="width: 60px; height: 60px; border-radius: 50%"
            src="../assets/ig.png"
          />
          <img
            class="icon"
            style="width: 60px; height: 60px; border-radius: 50%"
            src="../assets/fb.png"
          />
          <img
            class="icon"
            style="width: 60px; height: 60px; border-radius: 50%"
            src="../assets/linkedin.png"
          />
        </div>
      </div>
    </div>
    <div class="text-container" style="margin-left: 20%">
      <div style="width: 900px; display: flex; margin-top: 90px">
        <img
          style="
            width: 180px;
            height: 180px;
            object-fit: cover;
            border-radius: 50%;
          "
          src="../assets/profiledraw2.jpg"
        />
        <div style="margin-left: 60px">
          <p
            class="montserrat-regular"
            style="font-size: 30px; font-weight: bold"
          >
            My details
          </p>
          <p class="montserrat-regular" style="font-size: 18px">
            You can call me Hin, I am a software engineering student at the
            College of Arts, Media, and Technology at Chiang Mai University. I
            am interested about creating web and mobile applications,
            encompassing both frontend and backend development, as well as
            deployment
          </p>
        </div>
      </div>
    </div>

    <div class="soft-skill">
      <div class="section-header">
        <h1>Soft-Skills</h1>
      </div>
      <div class="soft-skills">
        <v-row class="justify-center" no-gutters>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="200">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Teamwork
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="200">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Lifelong Learning
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="200">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Communication
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="hard-skill">
      <div style="margin-left: 4%; margin-bottom: 20px">
        <h1>Hard-Skills</h1>
      </div>
      <div class="skills">
        <v-row class="justify-center">
          <v-col cols="1">
            <v-card width="100">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                React
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="300">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Vue
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="300">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Javascript
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Java
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Flask
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Python
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                C#
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Flutter
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                Docker
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                SQL
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card width="400">
              <v-card-title
                class="montserrat-regular text-center"
                style="font-weight: 700; font-size: 12px"
                primary-title
              >
                MongoDB
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="hobbies">
      <div style="margin-left: 4%; margin-bottom: 20px">
        <h1>Hobbies</h1>
      </div>
      <div class="hobbies">
        <v-row class="justify-center" no-gutters>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="300">
              <v-img
                width="300"
                height="200"
                src="https://cdn.oneesports.gg/cdn-data/2024/07/top_7_shooter_cs_HD2_cover-1024x576.jpg"
              />
              <v-card-title
                class="montserrat-regular"
                style="font-weight: 700"
                primary-title
                >PLAY VIDEO GAMES</v-card-title
              >
              <v-card-text
                >Most of the time I play FPS Games such as Valorant, APEX, CSGO2
                and MMORPG Games such as POE, BDO</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="300">
              <v-img
                width="300"
                height="200"
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/24/12/bring-me-the-horizon-0.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp"
              />
              <v-card-title
                class="montserrat-regular"
                style="font-weight: 700"
                primary-title
                >LISTEN TO MUSIC</v-card-title
              >
              <v-card-text
                >I always love rock songs, my favorite band is Bring Me The
                Horizon, aka BMTZ. It is a British rock band.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="300">
              <v-img width="300" height="200" src="../assets/drink_dude.jpg" />
              <v-card-title
                class="montserrat-regular"
                style="font-weight: 700"
                primary-title
                >GOING TO PARTIES</v-card-title
              >
              <v-card-text
                >I love socializing, also drinking with my friends. We usually
                hangout on Friday or Saturday.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="auto" class="d-flex justify-center mx-4">
            <v-card width="300">
              <v-img
                width="300"
                height="200"
                src="https://i.kym-cdn.com/photos/images/original/002/428/453/2c1.jpg"
              />
              <v-card-title
                class="montserrat-regular"
                style="font-weight: 700"
                primary-title
                >WATCHING MOVIES</v-card-title
              >
              <v-card-text
                >Most of the movies i watch is Action , Comendy and
                Sci-fi</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="movies">
      <div style="margin-left: 4%; margin-bottom: 20px">
        <h1>Best movies of all time</h1>
      </div>
      <div class="carousel-container">
        <CustomCarousel :items="carouselItems" />
      </div>
    </div>
  </div>
</template>


<script>
import CustomCarousel from "@/components/CarouselVue.vue";
export default {
  components: {
    CustomCarousel,
  },
  data() {
    return {
      carouselItems: [
        {
          src: "https://film-authority.com/wp-content/uploads/2021/12/16-9.jpg",
          title: "BadBoy",
          description:
            "Bad Boys is a series of American buddy cop action comedy films starring Will Smith and Martin Lawrence as two detectives in the Miami Police Department, Mike Lowrey and Marcus Burnett. The series was created by George Gallo",
        },
        {
          src: "https://e1.pxfuel.com/desktop-wallpaper/414/512/desktop-wallpaper-the-fast-and-the-furious-tokyo-drift.jpg",
          title: "Fast and the Furious: Tokyo Drift",
          description:
            "The Fast and the Furious: Tokyo Drift is a action film directed by Justin Lin and written by Chris Morgan.In the film, car enthusiast Sean Boswell (Black) is sent to live in Tokyo with his estranged father and finds solace exploring the city drifting community.",
        },
        {
          src: "https://deadline.com/wp-content/uploads/2023/10/star-wars.jpg",
          title: "Star Wars",
          description:
            "Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas",
        },
      ],
    };
  },
};
</script>
<style scoped>
.montserrat-regular {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
}

.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hobbies {
  margin-top: 50px;
}

.content {
  display: flex;
  align-items: center;
}

.social-icons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
}

.icon {
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
  transition: transform 0.2s ease-in-out;
}

.icon:hover {
  transform: scale(1.5);
}

.skills {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.hard-skill {
  margin-top: 50px;
}

.section-header {
  text-align: left;
  margin-left: 4%;
  margin-bottom: 20px;
}

.soft-skill {
  margin-top: 50px;
  text-align: center;
}

.soft-skills {
  margin: 0 auto;
  max-width: 1200px;
}

.hobbies {
  margin-top: 50px;
}
.movies {
  margin-top: 50px;
  margin-bottom: 50px;
}

.mx-4 {
  margin-left: 32px;
  margin-right: 32px;
}
.carousel-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}
</style>
