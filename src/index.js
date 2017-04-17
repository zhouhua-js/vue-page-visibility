import resume from 'vue-resume/src/vue-resume';
import pause from 'vue-pause/src/vue-pause';

export { resume, pause };

export default vue => {
    vue.mixin(resume);
    vue.mixin(pause);
};
