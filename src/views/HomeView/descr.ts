import CustomButton from "@/components/Buttons/mainButton";
import BlogPost from "@/components/Card";
export default {
  name: "Description",
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
  components: {
    CustomButton,
    BlogPost,
  },
  props: ["title", "id"],
};
