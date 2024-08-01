<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DEFAULT_AVATAR_URL } from '@/lib/const'
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your avatar, name and introduction.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-2">
        <div class="space-y-1">
          <Label for="name">Avatar</Label>
          <p class="text-xs text-zinc-400">
            Min 200x200px, PNG or JPEG
          </p>
        </div>
        <div class="flex items-center gap-6">
          <Avatar class="relative w-20 h-20">
            <AvatarImage :src="DEFAULT_AVATAR_URL" alt="@shadcn" />
          </Avatar>
          <Button size="sm">
            Upload
          </Button>
        </div>
      </div>
      <div class="space-y-1">
        <Label for="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div class="space-y-1">
        <Label for="username">Introduction</Label>
        <Input id="username" placeholder="Enter your introduction" />
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
</template>
