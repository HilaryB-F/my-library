import "./EditRoomModal.scss";

import React from "react";

export default function RoomModal({ setRoomValue, setOpenRoom }) {
  return (
    <main className="edit-room-modal__container">
      <h2
        className="edit-room-modal__text"
        onClick={() => {
          setRoomValue("My Library");
          setOpenRoom(false);
        }}
      >
        My Library
      </h2>
      <h2
        className="edit-room-modal__text edit-room-modal__text-bottom"
        onClick={() => {
          setRoomValue("Unread");
          setOpenRoom(false);
        }}
      >
        Unread
      </h2>
    </main>
  );
}
