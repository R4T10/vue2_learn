<template>
  <div class="form-container">
    <div class="form-content">
      <h1>Grade Calculator</h1>
      <v-text-field
        v-model="number"
        clearable
        label="Enter number"
        outlined
        dense
        class="input-field"
      ></v-text-field>
      <v-btn @click="submit" color="primary" class="submit-button">
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "GradeView",
  data() {
    return {
      number: "",
      grade: "",
    };
  },
  methods: {
    submit() {
      const numberValue = parseInt(this.number, 10);

      if (isNaN(numberValue) || numberValue < 0 || numberValue > 100) {
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: "Please enter a number between 0 and 100.",
        });
      } else {
        let grade, title, message, color, icon;

        if (numberValue >= 80 && numberValue <= 100) {
          grade = "A";
          title = "Excellent Work!";
          message = `Your score of ${numberValue} means you've achieved a grade of <span style="color: green;">A</span>.`;
          color = "#28a745";
          icon = "success";
        } else if (numberValue >= 70 && numberValue <= 79) {
          grade = "B";
          title = "Good Job!";
          message = `Your score of ${numberValue} means you've achieved a grade of <span style="color: blue;">B</span>.`;
          color = "#007bff";
          icon = "info";
        } else if (numberValue >= 60 && numberValue <= 69) {
          grade = "C";
          title = "You Passed!";
          message = `Your score of ${numberValue} means you've achieved a grade of <span style="color: orange;">C</span>.`;
          color = "#ff851b";
          icon = "warning";
        } else if (numberValue >= 50 && numberValue <= 59) {
          grade = "D";
          title = "Needs Improvement!";
          message = `Your score of ${numberValue} means you've achieved a grade of <span style="color: orange;">D</span>.`;
          color = "#ff851b";
          icon = "warning";
        } else {
          grade = "F";
          title = "Failed";
          message = `Your score of ${numberValue} means you've achieved a grade of <span style="color: red;">F</span>. Please work harder next time.`;
          color = "#dc3545";
          icon = "error";
        }

        Swal.fire({
          icon: icon,
          title: `Grade: ${grade}`,
          html: `
              <div style="font-size: 18px;">
                <strong>${title}</strong>
                <p>${message}</p>
              </div>
            `,
          background:
            grade === "A"
              ? "#f0f9f0"
              : grade === "B"
              ? "#e6f0ff"
              : grade === "C" || grade === "D"
              ? "#fff8e6"
              : "#f9e6e6",
          confirmButtonText: grade === "F" ? "I Will!" : "Great!",
          confirmButtonColor: color,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timer: 5000,
          timerProgressBar: true,
        });

        this.number = "";
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.form-content {
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
}

.input-field {
  width: 100%;
  margin-bottom: 20px;
}

.submit-button {
  width: 100%;
  text-transform: none;
  font-size: 16px;
}
</style>
