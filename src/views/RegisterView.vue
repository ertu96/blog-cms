<script setup lang="ts"></script>

<template>
  <div
    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto"
  >
    <div class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">First name</span>
        </label>
        <input
          type="text"
          placeholder="firstname"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Last name</span>
        </label>
        <input
          type="text"
          placeholder="lastname"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" placeholder="email" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="password"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text"> Reenter Password</span>
        </label>
        <input
          type="text"
          placeholder="reenter password"
          class="input input-bordered"
        />
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>
