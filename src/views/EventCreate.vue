<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>
      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        vertical
      />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>
      <div>
        <BaseCheckbox v-model="event.extras.music" label="Live music" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/form/BaseInput.vue'
import BaseSelect from '@/components/form/BaseSelect.vue'
import BaseCheckbox from '@/components/form/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/form/BaseRadioGroup.vue'

export default {
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
}
</script>
