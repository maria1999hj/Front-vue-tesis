<template>
  <div>
    <p class="q-mt-md text-h5">{{ course.name }}</p>
    <p>Hora de inicio: {{ course.start_time }}</p>
    <div class="row q-mb-md">
      <p class="q-mr-md">Zoom</p>
      <q-btn
        :disable="disabledJoinMeeting"
        label="Entrar a la reunion"
        color="primary"
      />
    </div>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import moment from "moment";

export default defineComponent({
  name: "CourseDetailDetail",
  setup() {
    const course = ref({});
    const courseDetail = ref({});
    const route = useRoute();
    const id = ref(route.params.course);
    const disabledJoinMeeting = ref(true);

    const getData = async () => {
      const [course_response, course_detail_reponse] = await Promise.all([
        api.get("/course/" + id.value),
        api.get("/course-detalle/course/" + id.value),
      ]);
      course.value = course_response.data;
      courseDetail.value = course_detail_reponse.data;

      validateStartMeeting(
        course.value.start_time,
        course.value.end_time,
        course.value.date
      );
    };

    const validateStartMeeting = (start_time, end_time, date) => {
      const today = new Date();

      const dateCourse = date.slice(0, 10);
      const initMeetingDate = new Date(`${dateCourse} ${start_time}`);
      const endMeetingDate = new Date(`${dateCourse} ${end_time}`);

      const equialOrElderly = moment(today).isAfter(initMeetingDate, "minute");
      const equialOrMinor = moment(endMeetingDate).isBefore(today, "minute");

      if (equialOrElderly && equialOrMinor) {
        disabledJoinMeeting.value = false;
      }
    };

    onMounted(async () => {
      await getData();
    });
    return {
      course,
      disabledJoinMeeting,
    };
  },
});
</script>
