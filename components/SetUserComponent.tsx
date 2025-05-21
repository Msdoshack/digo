"use client";
import { useUserStore } from "@/store/user";
import React, { useEffect, useState } from "react";
import SetUserModal from "./modals/SetUserModal";

const SetUserComponent = () => {
  const [isMount, setIsMount] = useState(false);
  const { user } = useUserStore();

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

  return !user ? <SetUserModal /> : null;
};

export default SetUserComponent;
